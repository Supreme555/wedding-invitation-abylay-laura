'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { WEDDING_INFO } from '@/constants/wedding';
import { Card } from '@/components/ui';
import { RSVPForm } from '@/features/rsvp/RSVPForm';

export function CountdownRSVPSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_INFO.weddingDate);

  const timeUnits = [
    { label: 'Дней', value: days },
    { label: 'Часов', value: hours },
    { label: 'Минут', value: minutes },
    { label: 'Секунд', value: seconds },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 bg-linear-to-br from-rose-50 to-pink-50"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-16">
          {/* Таймер */}
          {!isExpired && (
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-8"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
              >
                До самого важного дня
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {timeUnits.map((unit) => (
                  <Card key={unit.label} className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {unit.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Форма RSVP */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-3"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
            >
              Подтвердите участие
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Пожалуйста, подтвердите ваше участие до 1 июля 2026 года
            </p>

            <div className="max-w-2xl mx-auto">
              <RSVPForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
