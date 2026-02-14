'use client';

import { InlineMusicPlayer } from '@/components/ui/InlineMusicPlayer';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center pt-[8vh]"
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/backgrounds/bg-page-1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          className="text-center space-y-4 md:space-y-6 py-8 px-6 h-[40vh] mx-auto flex flex-col items-center justify-center animate-morph"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
        >
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <p
              className="text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px]"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
            >
              ВМЕСТЕ С СЕМЬЯМИ
            </p>
          </div>

          <div
            className="animate-fade-in-up space-y-2 md:space-y-3"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <h1
              className="text-[38px] leading-tight sm:text-[44px] md:text-[58px] lg:text-[66px]"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#4a4a3e' }}
            >
              Абылай
            </h1>

            <p
              className="text-[28px] md:text-[40px]"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#8a8a7a' }}
            >
              &
            </p>

            <h1
              className="text-[38px] leading-tight sm:text-[44px] md:text-[58px] lg:text-[66px]"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#4a4a3e' }}
            >
              Лаура
            </h1>
          </div>

          <div
            className="animate-fade-in-up pt-4"
            style={{ animationDelay: '0.9s', opacity: 0 }}
          >
            <p
              className="text-sm md:text-base italic"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
            >
              просят вас разделить
              <br />
              радость их бракосочетания
            </p>
          </div>
        </div>
      </div>

      {/* Музыкальный плеер */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <InlineMusicPlayer src="/audio/Midnite String Quartet - Young and Beautiful.mp3" />
      </div>

      {/* Индикатор скролла */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow"
        style={{ animationDelay: '1.2s' }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="#8a8a7a"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
