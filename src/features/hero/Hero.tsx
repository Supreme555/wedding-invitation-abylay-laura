'use client';

import { InlineMusicPlayer } from '@/components/ui/InlineMusicPlayer';
import { useLanguage } from '@/i18n/LanguageContext';

export function Hero() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center"
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
        {/* Переключатель языка */}
        <div className="flex justify-end pt-3 pr-1">
          <div className="flex gap-1">
            <button
              onClick={() => setLocale('kz')}
              className="px-3 py-1 text-sm uppercase tracking-wider font-semibold transition-opacity"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: locale === 'kz' ? '#fef9db' : '#6b6b5e',
                backgroundColor: locale === 'kz' ? '#6b6b5e' : 'rgba(255,255,255,0.4)',
                borderRadius: '2px',
              }}
            >
              ҚАЗ
            </button>
            <button
              onClick={() => setLocale('ru')}
              className="px-3 py-1 text-sm uppercase tracking-wider font-semibold transition-opacity"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: locale === 'ru' ? '#fef9db' : '#6b6b5e',
                backgroundColor: locale === 'ru' ? '#6b6b5e' : 'rgba(255,255,255,0.4)',
                borderRadius: '2px',
              }}
            >
              РУС
            </button>
          </div>
        </div>

        <div
          className="text-center space-y-4 md:space-y-6 py-8 px-6 h-[40vh] mx-auto flex flex-col items-center justify-center animate-morph"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
        >
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <p
              className="text-sm md:text-base uppercase tracking-[3px] md:tracking-[4px]"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
            >
              {t.hero.withFamilies[locale]}
            </p>
          </div>

          <div
            className="animate-fade-in-up space-y-2 md:space-y-3"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <h1
              className="text-[48px] leading-tight sm:text-[56px] md:text-[68px] lg:text-[78px]"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#4a4a3e' }}
            >
              {t.hero.groomName[locale]}
            </h1>

            <p
              className="text-[36px] md:text-[48px]"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#8a8a7a' }}
            >
              &
            </p>

            <h1
              className="text-[48px] leading-tight sm:text-[56px] md:text-[68px] lg:text-[78px]"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#4a4a3e' }}
            >
              {t.hero.brideName[locale]}
            </h1>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.9s', opacity: 0 }}
          >
            <p
              className="text-base md:text-lg italic"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
            >
              {t.hero.invitation[locale].split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Градиентный переход к следующей секции */}
      <div
        className="absolute bottom-0 left-0 right-0 z-1 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #fef9db 100%)',
        }}
      />

      {/* Музыкальный плеер */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <InlineMusicPlayer src={locale === 'kz' ? '/audio/kaz-music.mp3' : '/audio/ru-music.mp3'} />
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
