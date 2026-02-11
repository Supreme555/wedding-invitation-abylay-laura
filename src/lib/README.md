# Library / Utilities

Вспомогательные функции и утилиты.

## `utils.ts`

### `cn(...inputs)`
Утилита для объединения и слияния Tailwind CSS классов с использованием `clsx` и `tailwind-merge`.

**Пример**:
```tsx
cn('base-class', condition && 'conditional-class', className)
```

### `formatDate(date, locale)`
Форматирование даты в читаемый формат.

**Параметры**:
- `date: Date` - дата для форматирования
- `locale: string` - локаль (по умолчанию 'ru-RU')

**Пример**:
```tsx
formatDate(new Date('2026-08-15'), 'ru-RU')
// "15 августа 2026 г."
```

### `getTimeRemaining(targetDate)`
Вычисляет оставшееся время до целевой даты.

**Возвращает**:
```typescript
{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}
```

**Пример**:
```tsx
const timeLeft = getTimeRemaining(weddingDate);
console.log(`Осталось ${timeLeft.days} дней`);
```

## Добавление новых утилит

Добавляйте новые утилитарные функции в этот файл, если они:
- Используются в нескольких местах приложения
- Не зависят от React (чистые функции)
- Являются общими помощниками
