'use client';

import Image from 'next/image';
import { useCountdown } from '@/hooks/useCountdown';
import { WEDDING_INFO } from '@/constants/wedding';
import { RSVPForm } from '@/features/rsvp/RSVPForm';
import { useLanguage } from '@/i18n/LanguageContext';

export function CountdownRSVPSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_INFO.weddingDate);
  const { locale, t } = useLanguage();

  const timeUnits = [
    { label: t.countdown.days[locale], value: days },
    { label: t.countdown.hours[locale], value: hours },
    { label: t.countdown.minutes[locale], value: minutes },
    { label: t.countdown.seconds[locale], value: seconds },
  ];

  return (
    <section
      className="min-h-screen bg-[#fef9db]"
      style={{ paddingBottom: '2rem' }}
    >
      <Image
        src="/images/CountdownRSVPSection/white-girl.png"
        alt=""
        width={800}
        height={500}
        className="w-full object-cover"
      />

      <div className="container mx-auto px-6 max-w-md">
        <div className="flex flex-col items-center">
          {!isExpired && (
            <>
              <h2
                className="mt-8 text-3xl md:text-4xl font-bold italic text-center"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                {t.countdown.title[locale]}
              </h2>

              <div className="mt-8 grid grid-cols-4 gap-4 w-full">
                {timeUnits.map((unit) => (
                  <div key={unit.label} className="flex flex-col items-center">
                    <span
                      className="text-5xl md:text-6xl font-bold"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
                    >
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span
                      className="mt-1 text-sm uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
                    >
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 w-16 h-px"
                style={{ backgroundColor: '#c5c0b0' }}
              />
            </>
          )}

          <h2
            className="mt-10 text-3xl md:text-4xl font-bold italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            {t.rsvp.title[locale]}
          </h2>
          <p
            className="mt-3 text-lg italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
          >
            {t.rsvp.subtitle[locale].split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>

          <div className="mt-8 w-full">
            <RSVPForm />
          </div>
        </div>
      </div>
    </section>
  );
}
