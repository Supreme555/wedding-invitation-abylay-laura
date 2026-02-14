'use client';

import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useLanguage } from '@/i18n/LanguageContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    attending: true,
    withPartner: false,
    partnerName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { locale, t } = useLanguage();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await axios.post(`${API_URL}/rsvp`, formData);
      setSubmitted(true);
    } catch {
      setError(t.rsvp.errorSend[locale]);
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
          {t.rsvp.thanks[locale]}
        </h3>
        <p
          className="mt-2 text-base italic"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
        >
          {t.rsvp.received[locale].split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
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
          {t.rsvp.nameLabel[locale]}
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
          placeholder={t.rsvp.namePlaceholder[locale]}
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
          {t.rsvp.attendLabel[locale]}
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
            {t.rsvp.attendYes[locale]}
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, attending: false, withPartner: false, partnerName: '' })}
            className="flex-1 py-3 text-base font-medium transition-colors"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: !formData.attending ? '#fef9db' : '#6b6b5e',
              backgroundColor: !formData.attending ? '#6b6b5e' : 'transparent',
              border: '1px solid #c5c0b0',
            }}
          >
            {t.rsvp.attendNo[locale]}
          </button>
        </div>
      </div>

      {/* Приду с парой */}
      {formData.attending && (
        <div>
          <label
            className="block text-sm font-medium mb-3"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
          >
            {t.rsvp.withPartner[locale]}
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, withPartner: true })}
              className="flex-1 py-3 text-base font-medium transition-colors"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: formData.withPartner ? '#fef9db' : '#6b6b5e',
                backgroundColor: formData.withPartner ? '#6b6b5e' : 'transparent',
                border: '1px solid #c5c0b0',
              }}
            >
              {t.rsvp.yes[locale]}
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, withPartner: false, partnerName: '' })}
              className="flex-1 py-3 text-base font-medium transition-colors"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: !formData.withPartner ? '#fef9db' : '#6b6b5e',
                backgroundColor: !formData.withPartner ? '#6b6b5e' : 'transparent',
                border: '1px solid #c5c0b0',
              }}
            >
              {t.rsvp.no[locale]}
            </button>
          </div>

          {formData.withPartner && (
            <input
              type="text"
              required
              className="w-full px-4 py-3 mt-4 rounded-none outline-none transition-colors"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: '#4a4a3e',
                backgroundColor: 'transparent',
                borderBottom: '1px solid #c5c0b0',
              }}
              placeholder={t.rsvp.partnerPlaceholder[locale]}
              value={formData.partnerName}
              onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
            />
          )}
        </div>
      )}

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
        {isSubmitting ? t.rsvp.submitting[locale] : t.rsvp.submit[locale]}
      </button>
    </form>
  );
}
