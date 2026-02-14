'use client';

import { WEDDING_INFO } from '@/constants/wedding';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

export function Details() {
  return (
    <section id="details" className="min-h-screen flex items-center justify-center py-16 bg-[#fef9db]" style={{ scrollSnapAlign: 'start' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Детали события
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle>Когда</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {new Intl.DateTimeFormat('ru-RU', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }).format(WEDDING_INFO.weddingDate)}
              </p>
              <p className="text-gray-600 mt-2">
                Время: {WEDDING_INFO.time}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <CardTitle>Где</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 font-medium mb-2">
                {WEDDING_INFO.venue.name}
              </p>
              <p className="text-gray-600">
                {WEDDING_INFO.venue.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${WEDDING_INFO.venue.coordinates?.lat},${WEDDING_INFO.venue.coordinates?.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-rose-600 hover:text-rose-700 font-medium"
              >
                Открыть на карте →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
