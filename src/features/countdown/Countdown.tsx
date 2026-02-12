'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { WEDDING_INFO } from '@/constants/wedding';
import { Card } from '@/components/ui';

export function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_INFO.weddingDate);

  if (isExpired) {
    return (
      <section className="py-16 bg-[#f4e7ca]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">
            Свадьба состоялась!
          </h2>
        </div>
      </section>
    );
  }

  const timeUnits = [
    { label: 'Дней', value: days },
    { label: 'Часов', value: hours },
    { label: 'Минут', value: minutes },
    { label: 'Секунд', value: seconds },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-16 bg-[#f4e7ca]" style={{ scrollSnapAlign: 'start' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          До самого важного дня
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
    </section>
  );
}
