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
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ name: '', attending: true, partnerName: '' });
  const [isCreating, setIsCreating] = useState(false);
  const [createForm, setCreateForm] = useState({ name: '', attending: true, partnerName: '' });
  const [isSaving, setIsSaving] = useState(false);

  const adminHeaders = { 'x-admin-password': password };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<Rsvp[]>(`${API_URL}/rsvp`, {
        headers: adminHeaders,
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

  const handleDelete = async (id: number) => {
    if (!window.confirm('Удалить эту запись?')) return;
    setIsSaving(true);
    try {
      await axios.delete(`${API_URL}/rsvp/${id}`, { headers: adminHeaders });
      setRsvps((prev) => prev?.filter((r) => r.id !== id) ?? null);
    } catch {
      alert('Ошибка при удалении');
    } finally {
      setIsSaving(false);
    }
  };

  const startEdit = (rsvp: Rsvp) => {
    setIsCreating(false);
    setEditingId(rsvp.id);
    setEditForm({
      name: rsvp.name,
      attending: rsvp.attending,
      partnerName: rsvp.partnerName ?? '',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleSave = async (id: number) => {
    setIsSaving(true);
    try {
      const response = await axios.patch<Rsvp>(
        `${API_URL}/rsvp/${id}`,
        {
          name: editForm.name,
          attending: editForm.attending,
          withPartner: editForm.partnerName.trim() !== '',
          partnerName: editForm.partnerName.trim() || null,
        },
        { headers: adminHeaders },
      );
      setRsvps((prev) =>
        prev?.map((r) => (r.id === id ? response.data : r)) ?? null,
      );
      setEditingId(null);
    } catch {
      alert('Ошибка при сохранении');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCreate = async () => {
    if (!createForm.name.trim()) return;
    setIsSaving(true);
    try {
      const response = await axios.post<Rsvp>(
        `${API_URL}/rsvp`,
        {
          name: createForm.name.trim(),
          attending: createForm.attending,
          withPartner: createForm.partnerName.trim() !== '',
          partnerName: createForm.partnerName.trim() || null,
        },
      );
      setRsvps((prev) => [response.data, ...(prev ?? [])]);
      setIsCreating(false);
      setCreateForm({ name: '', attending: true, partnerName: '' });
    } catch {
      alert('Ошибка при создании');
    } finally {
      setIsSaving(false);
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

  const cellStyle = {
    fontFamily: 'var(--font-cormorant)',
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
            className="text-center mb-4 text-2xl"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#8a8a7a' }}
          >
            Всего: {totalCount} &middot; Придут: {attendingCount} &middot; Не
            придут: {decliningCount} &middot; С парой: {withPartnerCount}
          </div>

          <div className="text-center mb-8">
            <button
              className="py-2 px-6 text-xl uppercase tracking-widest font-semibold transition-opacity hover:opacity-80"
              style={{
                fontFamily: 'var(--font-cormorant)',
                color: '#fef9db',
                backgroundColor: '#6b6b5e',
                border: '2px solid #8a8a7a',
              }}
              onClick={() => {
                setEditingId(null);
                setIsCreating(true);
                setCreateForm({ name: '', attending: true, partnerName: '' });
              }}
              disabled={isCreating || isSaving}
            >
              + Создать
            </button>
          </div>

          {rsvps.length === 0 && !isCreating ? (
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
                    {['#', 'Имя', 'Придёт?', 'Партнёр', 'Дата', 'Действия'].map((header) => (
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
                  {isCreating && (
                    <tr style={{ borderBottom: '1px solid #e8e4d9', backgroundColor: '#faf5d0' }}>
                      <td
                        className="py-3 px-4 text-xl"
                        style={{ ...cellStyle, color: '#8a8a7a' }}
                      >
                        *
                      </td>
                      <td className="py-3 px-4">
                        <input
                          className="text-xl w-full px-2 py-1 outline-none"
                          style={{
                            ...cellStyle,
                            color: '#4a4a3e',
                            backgroundColor: 'transparent',
                            borderBottom: '1px solid #c5c0b0',
                          }}
                          placeholder="Имя и фамилия"
                          value={createForm.name}
                          onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
                          autoFocus
                        />
                      </td>
                      <td className="py-3 px-4">
                        <select
                          className="text-xl px-2 py-1 outline-none"
                          style={{
                            ...cellStyle,
                            color: createForm.attending ? '#5a7a5a' : '#b45454',
                            backgroundColor: 'transparent',
                            borderBottom: '1px solid #c5c0b0',
                          }}
                          value={createForm.attending ? 'yes' : 'no'}
                          onChange={(e) => setCreateForm({ ...createForm, attending: e.target.value === 'yes' })}
                        >
                          <option value="yes">Да</option>
                          <option value="no">Нет</option>
                        </select>
                      </td>
                      <td className="py-3 px-4">
                        <input
                          className="text-xl w-full px-2 py-1 outline-none"
                          style={{
                            ...cellStyle,
                            color: '#4a4a3e',
                            backgroundColor: 'transparent',
                            borderBottom: '1px solid #c5c0b0',
                          }}
                          placeholder="—"
                          value={createForm.partnerName}
                          onChange={(e) => setCreateForm({ ...createForm, partnerName: e.target.value })}
                        />
                      </td>
                      <td
                        className="py-3 px-4 text-xl"
                        style={{ ...cellStyle, color: '#8a8a7a' }}
                      >
                        —
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <button
                          className="text-lg mr-3 uppercase tracking-wider font-semibold disabled:opacity-50"
                          style={{ ...cellStyle, color: '#5a7a5a' }}
                          onClick={handleCreate}
                          disabled={isSaving}
                        >
                          {isSaving ? 'Сохраняю...' : 'Сохранить'}
                        </button>
                        <button
                          className="text-lg uppercase tracking-wider font-semibold disabled:opacity-50"
                          style={{ ...cellStyle, color: '#8a8a7a' }}
                          onClick={() => setIsCreating(false)}
                          disabled={isSaving}
                        >
                          Отмена
                        </button>
                      </td>
                    </tr>
                  )}
                  {rsvps.map((rsvp, index) => (
                    <tr
                      key={rsvp.id}
                      style={{ borderBottom: '1px solid #e8e4d9' }}
                    >
                      <td
                        className="py-3 px-4 text-xl"
                        style={{ ...cellStyle, color: '#8a8a7a' }}
                      >
                        {index + 1}
                      </td>

                      {editingId === rsvp.id ? (
                        <>
                          <td className="py-3 px-4">
                            <input
                              className="text-xl w-full px-2 py-1 outline-none"
                              style={{
                                ...cellStyle,
                                color: '#4a4a3e',
                                backgroundColor: 'transparent',
                                borderBottom: '1px solid #c5c0b0',
                              }}
                              value={editForm.name}
                              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            />
                          </td>
                          <td className="py-3 px-4">
                            <select
                              className="text-xl px-2 py-1 outline-none"
                              style={{
                                ...cellStyle,
                                color: editForm.attending ? '#5a7a5a' : '#b45454',
                                backgroundColor: 'transparent',
                                borderBottom: '1px solid #c5c0b0',
                              }}
                              value={editForm.attending ? 'yes' : 'no'}
                              onChange={(e) => setEditForm({ ...editForm, attending: e.target.value === 'yes' })}
                            >
                              <option value="yes">Да</option>
                              <option value="no">Нет</option>
                            </select>
                          </td>
                          <td className="py-3 px-4">
                            <input
                              className="text-xl w-full px-2 py-1 outline-none"
                              style={{
                                ...cellStyle,
                                color: '#4a4a3e',
                                backgroundColor: 'transparent',
                                borderBottom: '1px solid #c5c0b0',
                              }}
                              placeholder="—"
                              value={editForm.partnerName}
                              onChange={(e) => setEditForm({ ...editForm, partnerName: e.target.value })}
                            />
                          </td>
                          <td
                            className="py-3 px-4 text-xl"
                            style={{ ...cellStyle, color: '#8a8a7a' }}
                          >
                            {formatDate(rsvp.createdAt)}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <button
                              className="text-lg mr-3 uppercase tracking-wider font-semibold disabled:opacity-50"
                              style={{ ...cellStyle, color: '#5a7a5a' }}
                              onClick={() => handleSave(rsvp.id)}
                              disabled={isSaving}
                            >
                              {isSaving ? 'Сохраняю...' : 'Сохранить'}
                            </button>
                            <button
                              className="text-lg uppercase tracking-wider font-semibold disabled:opacity-50"
                              style={{ ...cellStyle, color: '#8a8a7a' }}
                              onClick={cancelEdit}
                              disabled={isSaving}
                            >
                              Отмена
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td
                            className="py-3 px-4 text-xl font-medium"
                            style={{ ...cellStyle, color: '#4a4a3e' }}
                          >
                            {rsvp.name}
                          </td>
                          <td
                            className="py-3 px-4 text-xl"
                            style={{
                              ...cellStyle,
                              color: rsvp.attending ? '#5a7a5a' : '#b45454',
                            }}
                          >
                            {rsvp.attending ? 'Да' : 'Нет'}
                          </td>
                          <td
                            className="py-3 px-4 text-xl"
                            style={{
                              ...cellStyle,
                              color: rsvp.partnerName ? '#4a4a3e' : '#c5c0b0',
                            }}
                          >
                            {rsvp.partnerName || '—'}
                          </td>
                          <td
                            className="py-3 px-4 text-xl"
                            style={{ ...cellStyle, color: '#8a8a7a' }}
                          >
                            {formatDate(rsvp.createdAt)}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <button
                              className="text-lg mr-3 uppercase tracking-wider font-semibold hover:opacity-70 disabled:opacity-50"
                              style={{ ...cellStyle, color: '#6b6b5e' }}
                              onClick={() => startEdit(rsvp)}
                              disabled={isSaving}
                            >
                              Ред.
                            </button>
                            <button
                              className="text-lg uppercase tracking-wider font-semibold hover:opacity-70 disabled:opacity-50"
                              style={{ ...cellStyle, color: '#b45454' }}
                              onClick={() => handleDelete(rsvp.id)}
                              disabled={isSaving}
                            >
                              Удалить
                            </button>
                          </td>
                        </>
                      )}
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
