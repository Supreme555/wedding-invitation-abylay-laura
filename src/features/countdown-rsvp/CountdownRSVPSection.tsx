'use client';

import Image from 'next/image';
import { useCountdown } from '@/hooks/useCountdown';
import { WEDDING_INFO } from '@/constants/wedding';
import { RSVPForm } from '@/features/rsvp/RSVPForm';

export function CountdownRSVPSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_INFO.weddingDate);

  const timeUnits = [
    { label: 'дней', value: days },
    { label: 'часов', value: hours },
    { label: 'минут', value: minutes },
    { label: 'секунд', value: seconds },
  ];

  return (
    <section
      className="min-h-screen bg-[#fef9db]"
      style={{ paddingBottom: '2rem' }}
    >
      {/* Изображение — без полей */}
      <Image
        src="/images/CountdownRSVPSection/white-girl.png"
        alt=""
        width={800}
        height={500}
        className="w-full object-cover"
      />

      <div className="container mx-auto px-6 max-w-md">
        <div className="flex flex-col items-center">
          {/* Таймер */}
          {!isExpired && (
            <>
              <h2
                className="mt-8 text-3xl md:text-4xl font-bold italic text-center"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                До нашего торжества
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

              {/* Разделитель */}
              <div
                className="mt-10 w-16 h-px"
                style={{ backgroundColor: '#c5c0b0' }}
              />
            </>
          )}

          {/* RSVP */}
          <h2
            className="mt-10 text-3xl md:text-4xl font-bold italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            Подтвердите участие
          </h2>
          <p
            className="mt-3 text-lg italic text-center"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
          >
            Пожалуйста, сообщите нам о вашем присутствии
            <br />
            до 1 июля 2026 года
          </p>

          <div className="mt-8 w-full">
            <RSVPForm />
          </div>
        </div>
      </div>
    </section>
  );
}
