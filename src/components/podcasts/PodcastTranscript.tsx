'use client'

import type { DialogueTurn } from '@/lib/podcasts/types'

interface PodcastTranscriptProps {
  turns: DialogueTurn[]
  currentTime?: number
}

export default function PodcastTranscript({ turns }: PodcastTranscriptProps) {
  return (
    <div className="space-y-3">
      {turns.map((turn, i) => (
        <div
          key={i}
          className={`flex gap-3 ${turn.speaker === 'B' ? 'flex-row-reverse' : ''}`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
              turn.speaker === 'A'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            {turn.voice === 'orion' ? 'T' : 'S'}
          </div>
          <div
            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              turn.speaker === 'A'
                ? 'bg-blue-50 text-slate-800 rounded-tl-sm'
                : 'bg-emerald-50 text-slate-800 rounded-tr-sm'
            }`}
          >
            {turn.text}
          </div>
        </div>
      ))}
    </div>
  )
}
