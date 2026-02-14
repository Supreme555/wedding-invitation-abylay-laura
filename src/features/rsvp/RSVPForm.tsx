'use client';

import { useState, FormEvent } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    attending: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await axios.post(`${API_URL}/rsvp`, formData);
      setSubmitted(true);
    } catch {
      setError('Не удалось отправить. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#e8e4d9' }}
        >
          <svg className="w-8 h-8" style={{ color: '#6b6b5e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-2xl font-bold italic"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
        >
          Спасибо!
        </h3>
        <p
          className="mt-2 text-base italic"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
        >
          Мы получили ваш ответ.
          <br />
          С нетерпением ждем встречи!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Имя */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
        >
          Имя и Фамилия
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 rounded-none outline-none transition-colors"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: '#4a4a3e',
            backgroundColor: 'transparent',
            borderBottom: '1px solid #c5c0b0',
          }}
          placeholder="Введите ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Присутствие */}
      <div>
        <label
          className="block text-sm font-medium mb-3"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
        >
          Вы придете?
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, attending: true })}
            className="flex-1 py-3 text-base font-medium transition-colors"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: formData.attending ? '#fef9db' : '#6b6b5e',
              backgroundColor: formData.attending ? '#6b6b5e' : 'transparent',
              border: '1px solid #c5c0b0',
            }}
          >
            Да, с радостью!
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, attending: false })}
            className="flex-1 py-3 text-base font-medium transition-colors"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: !formData.attending ? '#fef9db' : '#6b6b5e',
              backgroundColor: !formData.attending ? '#6b6b5e' : 'transparent',
              border: '1px solid #c5c0b0',
            }}
          >
            К сожалению, нет
          </button>
        </div>
      </div>

      {error && (
        <p
          className="text-sm text-center"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#b45454' }}
        >
          {error}
        </p>
      )}

      {/* Кнопка отправки */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 text-base uppercase tracking-widest font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{
          fontFamily: 'var(--font-cormorant)',
          color: '#fef9db',
          backgroundColor: '#6b6b5e',
          border: '2px solid #8a8a7a',
        }}
      >
        {isSubmitting ? 'Отправка...' : 'ОТПРАВИТЬ'}
      </button>
    </form>
  );
}
