'use client';

import Image from 'next/image';

export function DressCodeSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#fef9db]"
      style={{ padding: '2rem 0' }}
    >
      <div className="container mx-auto px-6 max-w-md">
        <div className="flex flex-col items-center">
          {/* Заголовок */}
          <h2
            className="text-4xl md:text-5xl italic"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#4a4a3e' }}
          >
            Дресс-код
          </h2>

          {/* Описание */}
          <p
            className="mt-6 text-lg md:text-xl leading-relaxed italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
          >
            Нам будет приятно,
            <br />
            если вы поддержите стилистику
            <br />
            нашей свадьбы и используете в ваших
            <br />
            нарядах предложенные цвета:
          </p>


          {/* Фото девушек */}
          <Image
            src="/images/dress-code/girls.png"
            alt="Женский дресс-код"
            width={400}
            height={400}
            className="mt-8 w-full max-w-sm object-contain"
          />

          {/* Фото мужчин */}
          <Image
            src="/images/dress-code/mans.png"
            alt="Мужской дресс-код"
            width={400}
            height={400}
            className="mt-6 w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}
