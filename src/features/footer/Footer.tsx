import { WEDDING_INFO, WEDDING_HASHTAG } from '@/constants/wedding';

export function Footer() {
  return (
    <footer className="min-h-screen flex items-center justify-center bg-[#fef9db] text-white py-12" style={{ scrollSnapAlign: 'start' }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            {WEDDING_INFO.groomName} & {WEDDING_INFO.brideName}
          </h3>

          <p className="text-gray-400 mb-6">
            {new Intl.DateTimeFormat('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }).format(WEDDING_INFO.weddingDate)}
          </p>

          <p className="text-rose-400 text-lg mb-8">
            {WEDDING_HASHTAG}
          </p>

          <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>

          <p className="text-gray-400 text-sm">
            С любовью создано для нашего особенного дня
          </p>
        </div>
      </div>
    </footer>
  );
}
