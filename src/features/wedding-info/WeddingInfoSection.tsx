'use client';

import { useMemo } from 'react';
import { WEDDING_INFO, VENUE_LINK } from '@/constants/wedding';
import { InlineMusicPlayer } from '@/components/ui/InlineMusicPlayer';

const DAYS_OF_WEEK = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const MONTH_NAMES = [
  'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
  'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ',
];

function buildCalendar(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const highlightDay = date.getDate();

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(startOffset).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return { weeks, highlightDay, monthName: MONTH_NAMES[month], year };
}

export function WeddingInfoSection() {
  const calendar = useMemo(() => buildCalendar(WEDDING_INFO.weddingDate), []);

  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 bg-[#fef9db]"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container mx-auto px-6 max-w-md">
        <div className="flex flex-col items-center">
          {/* Заголовок */}
          <h2
            className="text-3xl md:text-4xl font-bold italic"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            ДОРОГИЕ ГОСТИ!
          </h2>

          {/* Приглашение */}
          <p
            className="mt-6 text-lg md:text-xl leading-relaxed italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
          >
            От всей души хотим пригласить вас
            <br />
            на наше свадебное торжество. Очень
            <br />
            надеемся провести этот радостный
            <br />
            день вместе с вами!
          </p>

          {/* Календарь */}
          <div className="mt-10 w-full" style={{ maxWidth: '320px' }}>
            {/* Месяц и год */}
            <div className="flex justify-between items-center mb-4 px-1">
              <span
                className="text-lg font-bold tracking-wider"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                {calendar.monthName}
              </span>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                {calendar.year}
              </span>
            </div>

            {/* Дни недели */}
            <div className="grid grid-cols-7 mb-1">
              {DAYS_OF_WEEK.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold py-1"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Числа */}
            {calendar.weeks.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className="flex items-center justify-center py-2"
                  >
                    {day !== null && (
                      day === calendar.highlightDay ? (
                        <div className="relative flex items-center justify-center w-9 h-9">
                          <svg
                            className="absolute inset-0"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8a8a7a"
                            strokeWidth="1.5"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          <span
                            className="relative text-base font-bold"
                            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
                          >
                            {day}
                          </span>
                        </div>
                      ) : (
                        <span
                          className="text-base"
                          style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
                        >
                          {day}
                        </span>
                      )
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Локация */}
          <h3
            className="mt-12 text-3xl md:text-4xl font-bold italic"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            ЛОКАЦИЯ
          </h3>
          <p
            className="mt-4 text-lg italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
          >
            {WEDDING_INFO.venue.name}
          </p>
          <p
            className="mt-1 text-lg italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
          >
            {WEDDING_INFO.venue.address}
          </p>

          {/* Кнопка карты */}
          <a
            href={VENUE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-3 text-base uppercase tracking-widest font-semibold transition-opacity hover:opacity-80"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: '#fef9db',
              backgroundColor: '#6b6b5e',
              border: '2px solid #8a8a7a',
            }}
          >
            ПОСМОТРЕТЬ НА КАРТЕ
          </a>

          {/* Музыкальный плеер */}
          <div className="mt-8">
            <InlineMusicPlayer src="/audio/wedding-music.mp3" />
          </div>
        </div>
      </div>
    </section>
  );
}
