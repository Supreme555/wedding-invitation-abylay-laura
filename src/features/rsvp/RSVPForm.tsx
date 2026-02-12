'use client';

import { useState, FormEvent } from 'react';
import { Button, Card, CardContent } from '@/components/ui';

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    attending: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Реализовать отправку формы на сервер
    console.log('RSVP Data:', formData);

    // Симуляция отправки
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            Спасибо!
          </h3>
          <p className="text-gray-600">
            Мы получили ваш ответ. С нетерпением ждем встречи с вами!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Имя и Фамилия *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Вы придете? *
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  checked={formData.attending}
                  onChange={() => setFormData({ ...formData, attending: true })}
                  className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                />
                <span className="ml-2">Да, обязательно!</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  checked={!formData.attending}
                  onChange={() => setFormData({ ...formData, attending: false })}
                  className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                />
                <span className="ml-2">К сожалению, нет</span>
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
