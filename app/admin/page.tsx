'use client';

import { useState, FormEvent } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Rsvp {
  id: number;
  name: string;
  attending: boolean;
  withPartner: boolean;
  partnerName: string | null;
  createdAt: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [rsvps, setRsvps] = useState<Rsvp[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<Rsvp[]>(`${API_URL}/rsvp`, {
        headers: { 'x-admin-password': password },
      });
      setRsvps(response.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        setError('Неверный пароль');
      } else {
        setError('Ошибка загрузки данных');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (rsvps !== null) {
    const totalCount = rsvps.length;
    const attendingCount = rsvps.filter((r) => r.attending).length;
    const decliningCount = totalCount - attendingCount;
    const withPartnerCount = rsvps.filter((r) => r.withPartner).length;

    return (
      <div
        className="min-h-screen py-12 px-4"
        style={{ backgroundColor: '#fef9db' }}
      >
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-6xl font-bold italic text-center mb-2"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
          >
            RSVP ответы
          </h1>

          <div
            className="text-center mb-8 text-2xl"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
          >
            Всего: {totalCount} &middot; Придут: {attendingCount} &middot; Не
            придут: {decliningCount} &middot; С парой: {withPartnerCount}
          </div>

          {rsvps.length === 0 ? (
            <p
              className="text-center text-2xl italic"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: '#8a8a7a',
              }}
            >
              Пока нет ответов.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #c5c0b0' }}>
                    {['#', 'Имя', 'Придёт?', 'Партнёр', 'Дата'].map((header) => (
                      <th
                        key={header}
                        className="py-3 px-4 text-left text-xl uppercase tracking-wider"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          color: '#6b6b5e',
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rsvps.map((rsvp, index) => (
                    <tr
                      key={rsvp.id}
                      style={{ borderBottom: '1px solid #e8e4d9' }}
                    >
                      <td
                        className="py-3 px-4 text-xl"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          color: '#8a8a7a',
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        className="py-3 px-4 text-xl font-medium"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          color: '#4a4a3e',
                        }}
                      >
                        {rsvp.name}
                      </td>
                      <td
                        className="py-3 px-4 text-xl"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          color: rsvp.attending ? '#5a7a5a' : '#b45454',
                        }}
                      >
                        {rsvp.attending ? 'Да' : 'Нет'}
                      </td>
                      <td
                        className="py-3 px-4 text-xl"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          color: rsvp.partnerName ? '#4a4a3e' : '#c5c0b0',
                        }}
                      >
                        {rsvp.partnerName || '—'}
                      </td>
                      <td
                        className="py-3 px-4 text-xl"
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          color: '#8a8a7a',
                        }}
                      >
                        {formatDate(rsvp.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#fef9db' }}
    >
      <div className="w-full max-w-sm">
        <h1
          className="text-5xl font-bold italic text-center mb-8"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#4a4a3e' }}
        >
          Панель администратора
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-medium mb-2"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#6b6b5e' }}
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-3 text-2xl rounded-none outline-none transition-colors"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: '#4a4a3e',
                backgroundColor: 'transparent',
                borderBottom: '1px solid #c5c0b0',
              }}
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p
              className="text-xl text-center"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#b45454' }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 text-2xl uppercase tracking-widest font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
            style={{
              fontFamily: 'var(--font-cormorant)',
              color: '#fef9db',
              backgroundColor: '#6b6b5e',
              border: '2px solid #8a8a7a',
            }}
          >
            {isLoading ? 'Загрузка...' : 'ВОЙТИ'}
          </button>
        </form>
      </div>
    </div>
  );
}
