# Components

Переиспользуемые компоненты приложения.

## Структура

### `ui/`
Базовые UI компоненты, которые используются во всем приложении:
- **Button** - Кнопка с вариантами стилей
- **Card** - Карточка для отображения контента

### `layout/`
Компоненты структуры страницы:
- **Header** - Навигационная шапка сайта

## Добавление новых компонентов

1. Создайте файл компонента в соответствующей директории
2. Экспортируйте из `index.ts` для удобного импорта
3. Используйте утилиту `cn()` для объединения классов Tailwind
4. Добавьте типизацию через TypeScript

## Пример

```tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'special';
}

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-classes',
          {
            'variant-classes': variant === 'special',
          },
          className
        )}
        {...props}
      />
    );
  }
);
```
