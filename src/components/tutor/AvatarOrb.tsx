'use client';

import { useEffect, useRef } from 'react';

export type OrbState = 'idle' | 'listening' | 'thinking' | 'speaking';

interface AvatarOrbProps {
  state: OrbState;
  tutor: {
    name: string;
    emoji: string;
    colorFrom: string;
    colorTo: string;
  };
  size?: number;
}

const STATE_CONFIG: Record<OrbState, { ring: string; glow: string; label: string; pulse: boolean }> = {
  idle: {
    ring: 'rgba(255,107,107,0.3)',
    glow: 'rgba(255,107,107,0.15)',
    label: 'En espera',
    pulse: false,
  },
  listening: {
    ring: 'rgba(34,197,94,0.5)',
    glow: 'rgba(34,197,94,0.2)',
    label: 'Escuchando...',
    pulse: true,
  },
  thinking: {
    ring: 'rgba(234,179,8,0.5)',
    glow: 'rgba(234,179,8,0.2)',
    label: 'Pensando...',
    pulse: false,
  },
  speaking: {
    ring: 'rgba(59,130,246,0.5)',
    glow: 'rgba(59,130,246,0.2)',
    label: 'Hablando...',
    pulse: true,
  },
};

export default function AvatarOrb({ state, tutor, size = 200 }: AvatarOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const baseR = size * 0.32;

    function draw(t: number) {
      ctx.clearRect(0, 0, size, size);

      const cfg = STATE_CONFIG[state];

      const breathe = 1 + Math.sin(t * 0.002) * 0.03;
      const orbR = baseR * breathe;

      if (state === 'listening') {
        for (let i = 3; i >= 1; i--) {
          const wave = Math.sin(t * 0.003 + i) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(cx, cy, orbR + i * 18 * wave, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34,197,94,${0.15 * (1 - i * 0.25)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      if (state === 'speaking') {
        const bars = 12;
        for (let i = 0; i < bars; i++) {
          const angle = (i / bars) * Math.PI * 2;
          const wave = Math.abs(Math.sin(t * 0.005 + i * 0.7)) * 20 + 6;
          const x1 = cx + Math.cos(angle) * (orbR + 4);
          const y1 = cy + Math.sin(angle) * (orbR + 4);
          const x2 = cx + Math.cos(angle) * (orbR + 4 + wave);
          const y2 = cy + Math.sin(angle) * (orbR + 4 + wave);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(59,130,246,${0.6 + Math.sin(t * 0.006 + i) * 0.3})`;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      if (state === 'thinking') {
        const dots = 3;
        for (let i = 0; i < dots; i++) {
          const angle = (i / dots) * Math.PI * 2 + t * 0.003;
          const dx = cx + Math.cos(angle) * (orbR + 16);
          const dy = cy + Math.sin(angle) * (orbR + 16);
          const opacity = 0.4 + Math.sin(t * 0.005 + i * 2) * 0.4;
          ctx.beginPath();
          ctx.arc(dx, dy, 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(234,179,8,${opacity})`;
          ctx.fill();
        }
      }

      const glow = ctx.createRadialGradient(cx, cy, orbR * 0.5, cx, cy, orbR * 1.5);
      glow.addColorStop(0, 'transparent');
      glow.addColorStop(1, cfg.glow);
      ctx.beginPath();
      ctx.arc(cx, cy, orbR * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      const grad = ctx.createLinearGradient(cx - orbR, cy - orbR, cx + orbR, cy + orbR);
      grad.addColorStop(0, tutor.colorFrom);
      grad.addColorStop(1, tutor.colorTo);
      ctx.beginPath();
      ctx.arc(cx, cy, orbR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.shadowColor = cfg.ring;
      ctx.shadowBlur = 24;
      ctx.fill();
      ctx.shadowBlur = 0;

      const shine = ctx.createRadialGradient(cx - orbR * 0.3, cy - orbR * 0.35, 0, cx, cy, orbR);
      shine.addColorStop(0, 'rgba(255,255,255,0.35)');
      shine.addColorStop(0.5, 'rgba(255,255,255,0.08)');
      shine.addColorStop(1, 'rgba(0,0,0,0.1)');
      ctx.beginPath();
      ctx.arc(cx, cy, orbR, 0, Math.PI * 2);
      ctx.fillStyle = shine;
      ctx.fill();

      ctx.font = `bold ${size * 0.22}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 4;
      ctx.fillText(tutor.emoji, cx, cy);
      ctx.shadowBlur = 0;
    }

    function loop(ts: number) {
      timeRef.current = ts;
      draw(ts);
      animFrameRef.current = requestAnimationFrame(loop);
    }

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [state, tutor, size]);

  const cfg = STATE_CONFIG[state];

  const stateColors: Record<OrbState, string> = {
    idle: 'text-slate-500',
    listening: 'text-green-600',
    thinking: 'text-yellow-600',
    speaking: 'text-blue-600',
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="drop-shadow-2xl"
      />
      <div className="flex items-center gap-2">
        {state !== 'idle' && (
          <span
            className="inline-block w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: cfg.ring }}
          />
        )}
        <span className={`text-sm font-semibold ${stateColors[state]}`}>
          {cfg.label}
        </span>
      </div>
    </div>
  );
}
