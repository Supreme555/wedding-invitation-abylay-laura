'use client';

import { useState, FormEvent } from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { RSVPData } from '@/types';

export function RSVPForm() {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    email: '',
    phone: '',
    attending: true,
    guestCount: 1,
    dietaryRestrictions: '',
    message: '',
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
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Спасибо!</h3>
          <p className="text-gray-600">
            Мы получили ваш ответ. С нетерпением ждем встречи с вами!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Подтвердите ваше участие</CardTitle>
      </CardHeader>
      <CardContent>
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

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Вы придете? *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  checked={formData.attending}
                  onChange={() => setFormData({ ...formData, attending: true })}
                  className="mr-2"
                />
                Да, обязательно!
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  checked={!formData.attending}
                  onChange={() => setFormData({ ...formData, attending: false })}
                  className="mr-2"
                />
                К сожалению, нет
              </label>
            </div>
          </div>

          {formData.attending && (
            <>
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Количество гостей *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  min="1"
                  max="10"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                />
              </div>

              <div>
                <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-2">
                  Пищевые ограничения
                </label>
                <input
                  type="text"
                  id="dietary"
                  placeholder="Например: вегетарианство, аллергии"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Пожелания
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
