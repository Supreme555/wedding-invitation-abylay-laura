'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

interface InlineMusicPlayerProps {
  src: string;
}

export function InlineMusicPlayer({ src }: InlineMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { locale, t } = useLanguage();

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
      <div
        className="flex items-center gap-3 px-6 py-3 rounded-full"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <svg className="w-5 h-5" style={{ color: '#6b6b5e' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#6b6b5e', color: '#fef9db' }}
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
          {isPlaying ? t.hero.musicPlaying[locale] : t.hero.playMusic[locale]}
        </span>
      </div>

      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
