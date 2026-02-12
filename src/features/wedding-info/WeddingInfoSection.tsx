'use client';

import { WEDDING_INFO, VENUE_LINK } from '@/constants/wedding';
import { InlineMusicPlayer } from '@/components/ui/InlineMusicPlayer';

export function WeddingInfoSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 bg-white"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center space-y-12">
          {/* Дата */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-rose-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-rose-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-sm uppercase tracking-wider mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
              >
                Дата
              </p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                {new Intl.DateTimeFormat('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }).format(WEDDING_INFO.weddingDate)}
              </p>
            </div>
          </div>

          {/* Время */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-rose-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-rose-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-sm uppercase tracking-wider mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
              >
                Время
              </p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                {WEDDING_INFO.time}
              </p>
            </div>
          </div>

          {/* Место */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-rose-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-rose-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-sm uppercase tracking-wider mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
              >
                Место
              </p>
              <a
                href={VENUE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-rose-600 hover:text-rose-700 transition-colors"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Открыть карту
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Музыкальный плеер */}
          <div className="pt-8">
            <InlineMusicPlayer src="/audio/wedding-music.mp3" />
          </div>
        </div>
      </div>
    </section>
  );
}
