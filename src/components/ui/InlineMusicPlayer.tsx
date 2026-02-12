'use client';

import { useState, useRef, useEffect } from 'react';

interface InlineMusicPlayerProps {
  src: string;
}

export function InlineMusicPlayer({ src }: InlineMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <div className="flex items-center gap-3 px-6 py-3 bg-rose-50 rounded-full">
        <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-700 transition-colors flex items-center justify-center text-white"
          aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <span
          className="text-sm font-medium"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
        >
          {isPlaying ? 'Играет музыка' : 'Включить музыку'}
        </span>
      </div>

      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
