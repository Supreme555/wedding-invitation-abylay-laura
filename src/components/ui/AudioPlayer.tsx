'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  autoPlay?: boolean;
}

export function AudioPlayer({ src, autoPlay = true }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (autoPlay) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay, volume]);

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-4 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-700 transition-colors flex items-center justify-center text-white"
          aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #e11d48 0%, #e11d48 ${volume * 100}%, #d1d5db ${volume * 100}%, #d1d5db 100%)`,
            }}
          />
        </div>
      </div>

      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
