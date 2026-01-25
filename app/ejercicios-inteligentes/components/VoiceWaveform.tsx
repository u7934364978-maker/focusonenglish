import React, { useEffect, useState } from 'react';

interface VoiceWaveformProps {
  isRecording: boolean;
  color?: string;
}

export default function VoiceWaveform({ isRecording, color = 'pink' }: VoiceWaveformProps) {
  const [bars, setBars] = useState<number[]>(new Array(15).fill(20));

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setBars(prev => prev.map(() => Math.floor(Math.random() * 40) + 10));
      }, 100);
    } else {
      setBars(new Array(15).fill(20));
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {bars.map((height, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-100 bg-${color}-500`}
          style={{ height: `${height}px`, opacity: isRecording ? 1 : 0.3 }}
        />
      ))}
    </div>
  );
}
