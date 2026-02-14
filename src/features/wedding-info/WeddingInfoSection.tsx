'use client';

import { useMemo } from 'react';
import { WEDDING_INFO, VENUE_LINK } from '@/constants/wedding';
import { useLanguage } from '@/i18n/LanguageContext';

function buildCalendar(date: Date, daysOfWeek: string[], monthNames: string[]) {
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

  return { weeks, highlightDay, monthName: monthNames[month], year, daysOfWeek };
}

export function WeddingInfoSection() {
  const { locale, t } = useLanguage();

  const calendar = useMemo(
    () => buildCalendar(
      WEDDING_INFO.weddingDate,
      t.weddingInfo.daysOfWeek[locale],
      t.weddingInfo.months[locale],
    ),
    [locale, t],
  );

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#fef9db]"
      style={{ padding: '2rem 0' }}
    >
      <div className="container mx-auto px-6 max-w-md">
        <div className="flex flex-col items-center">
          <h2
            className="text-3xl md:text-4xl font-bold italic"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            {t.weddingInfo.title[locale]}
          </h2>

          <p
            className="mt-5 text-lg md:text-xl leading-relaxed italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
          >
            {t.weddingInfo.message[locale].split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>

          <div className="mt-8 w-full" style={{ maxWidth: '320px' }}>
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

            <div className="grid grid-cols-7 mb-1">
              {calendar.daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold py-1"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
                >
                  {day}
                </div>
              ))}
            </div>

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

          <p
            className="mt-8 text-base uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
          >
            {t.weddingInfo.startAt[locale]}
          </p>
          <p
            className="mt-1 text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            {WEDDING_INFO.time}
          </p>

          <h3
            className="mt-10 text-3xl md:text-4xl font-bold italic"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            {t.weddingInfo.location[locale]}
          </h3>
          <p
            className="mt-3 text-lg italic text-center"
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

          <a
            href={VENUE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 text-base uppercase tracking-widest font-semibold transition-opacity hover:opacity-80"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: '#fef9db',
              backgroundColor: '#6b6b5e',
              border: '2px solid #8a8a7a',
            }}
          >
            {t.weddingInfo.viewOnMap[locale]}
          </a>

        </div>
      </div>
    </section>
  );
}
