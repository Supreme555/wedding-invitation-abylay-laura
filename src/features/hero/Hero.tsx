'use client';

import { WEDDING_INFO } from '@/constants/wedding';
import { formatDate } from '@/lib/utils';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
            {WEDDING_INFO.groomName} & {WEDDING_INFO.brideName}
          </h1>

          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>

          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Приглашаем вас на нашу свадьбу
          </p>

          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {formatDate(WEDDING_INFO.weddingDate)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#rsvp"
              className="inline-flex items-center justify-center px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-lg font-medium"
            >
              Подтвердить участие
            </a>
            <a
              href="#details"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-rose-600 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors text-lg font-medium"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rose-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
