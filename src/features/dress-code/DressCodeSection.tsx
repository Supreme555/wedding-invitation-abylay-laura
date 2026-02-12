'use client';

export function DressCodeSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 bg-white"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Заголовок */}
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
            >
              Дресс-код
            </h2>
            <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
          </div>

          {/* Описание */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p
              className="text-lg md:text-xl"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
            >
              Мы будем рады видеть вас в элегантной одежде
            </p>

            {/* Цветовая палитра */}
            <div className="space-y-4">
              <p
                className="text-base md:text-lg font-medium"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                Рекомендуемая цветовая гамма:
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-rose-400 shadow-lg"></div>
                  <span className="text-sm text-gray-600">Розовый</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-amber-100 shadow-lg"></div>
                  <span className="text-sm text-gray-600">Бежевый</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-emerald-700 shadow-lg"></div>
                  <span className="text-sm text-gray-600">Зеленый</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 shadow-lg"></div>
                  <span className="text-sm text-gray-600">Белый</span>
                </div>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="pt-6">
              <p
                className="text-base md:text-lg italic"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
              >
                Пожалуйста, воздержитесь от ярких неоновых цветов
              </p>
            </div>
          </div>

          {/* Иконки стиля */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Formal</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Elegant</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Romantic</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Comfort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
