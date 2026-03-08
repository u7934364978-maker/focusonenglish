'use client';

import Link from 'next/link';

const IMAGE_PATH = '/game-assets/cat-looking-for-food.png';
const VIDEO_PATH = '/game-assets/cat-walking-for-food.mp4';

export default function DemoCatClient() {
  return (
    <div className="min-h-screen bg-[#FEF9F5] p-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/juego-ingles"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium mb-8"
        >
          ← Volver al juego
        </Link>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Demo: el gato caminando para buscar comida
        </h1>
        <p className="text-slate-600 mb-8">
          Imagen generada con <strong>Leonardo.AI</strong> y vídeo con <strong>Runway</strong>.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Ilustración (Leonardo)</h2>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGE_PATH}
                alt="Gato con bufanda roja caminando por la calle en busca de comida"
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <p className="hidden p-6 text-slate-500 text-center text-sm">
                No hay imagen todavía. Ejecuta{' '}
                <code className="bg-slate-100 px-2 py-0.5 rounded">npm run demo-cat-assets</code>{' '}
                (con LEONARDO_API_KEY y RUNWAY_API_KEY en .env).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Vídeo (Runway)</h2>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <video
                src={VIDEO_PATH}
                controls
                className="w-full"
                playsInline
                onError={(e) => {
                  (e.target as HTMLVideoElement).style.display = 'none';
                  (e.target as HTMLVideoElement).nextElementSibling?.classList.remove('hidden');
                }}
              >
                Tu navegador no soporta el vídeo.
              </video>
              <p className="hidden p-6 text-slate-500 text-center text-sm">
                No hay vídeo todavía. Ejecuta{' '}
                <code className="bg-slate-100 px-2 py-0.5 rounded">npm run demo-cat-assets</code>.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-xs text-slate-400">
          Para generar los assets: añade LEONARDO_API_KEY y RUNWAY_API_KEY a tu archivo .env y
          ejecuta <code className="bg-slate-100 px-1 rounded">npm run demo-cat-assets</code>. La
          primera vez puede tardar varios minutos (Leonardo ~30 s, Runway ~2–5 min).
        </p>
      </div>
    </div>
  );
}
