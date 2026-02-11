# Wedding Invitation - Abylay & Laura

Современное веб-приложение для свадебного приглашения, созданное с использованием Next.js 16, TypeScript и Tailwind CSS.

## Возможности

- **Hero Section** - Красивый главный экран с именами и датой
- **Countdown Timer** - Живой таймер обратного отсчета до дня свадьбы
- **Event Details** - Информация о времени и месте проведения
- **Photo Gallery** - Галерея фотографий пары
- **RSVP Form** - Форма для подтверждения участия гостей
- **Responsive Design** - Адаптивный дизайн для всех устройств
- **Smooth Navigation** - Плавная прокрутка между секциями

## Технологический стек

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Font**: Playfair Display (serif), Inter (sans-serif)
- **Package Manager**: Yarn

## Начало работы

### Установка зависимостей

```bash
yarn install
```

### Запуск сервера разработки

```bash
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
yarn build
yarn start
```

## Структура проекта

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Корневой layout с Header
│   ├── page.tsx             # Главная страница
│   └── globals.css          # Глобальные стили
│
├── src/
│   ├── components/          # Переиспользуемые компоненты
│   │   ├── ui/              # UI компоненты (Button, Card)
│   │   └── layout/          # Header, Footer
│   │
│   ├── features/            # Фичи приложения
│   │   ├── hero/            # Главный экран
│   │   ├── countdown/       # Таймер
│   │   ├── details/         # Детали события
│   │   ├── rsvp/            # Форма RSVP
│   │   ├── gallery/         # Галерея
│   │   └── footer/          # Футер
│   │
│   ├── hooks/               # React hooks
│   ├── lib/                 # Утилиты
│   ├── types/               # TypeScript типы
│   └── constants/           # Конфигурация
│
└── public/                  # Статические файлы
    └── images/              # Изображения
```

Подробнее об архитектуре см. [ARCHITECTURE.md](./ARCHITECTURE.md)

## Настройка

### Обновление информации о свадьбе

Отредактируйте файл [src/constants/wedding.ts](src/constants/wedding.ts):

```typescript
export const WEDDING_INFO: WeddingInfo = {
  brideName: 'Laura',
  groomName: 'Abylay',
  weddingDate: new Date('2026-08-15T16:00:00'),
  venue: {
    name: 'Название места проведения',
    address: 'Адрес места проведения',
    coordinates: {
      lat: 0, // Широта
      lng: 0, // Долгота
    },
  },
  time: '16:00',
};
```

### Добавление фотографий в галерею

1. Разместите изображения в `public/images/gallery/`
2. Обновите массив `GALLERY_IMAGES` в [src/features/gallery/Gallery.tsx](src/features/gallery/Gallery.tsx)

### Настройка RSVP формы

Реализуйте отправку формы в [src/features/rsvp/RSVPForm.tsx](src/features/rsvp/RSVPForm.tsx).
Можно интегрировать с:
- Backend API
- Email сервисом (SendGrid, etc.)
- Google Sheets
- Любым другим сервисом

## Дальнейшая разработка

- [ ] Добавить реальные фотографии в галерею
- [ ] Настроить отправку RSVP формы на бэкенд
- [ ] Добавить анимации (Framer Motion)
- [ ] Интегрировать карту (Google Maps/Yandex Maps)
- [ ] Добавить мультиязычность (i18n)
- [ ] Настроить SEO и Open Graph теги
- [ ] Добавить музыкальное сопровождение
- [ ] Создать админ-панель для управления RSVP

## Деплой

### Vercel (рекомендуется)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push код в GitHub
2. Импортируйте проект в Vercel
3. Vercel автоматически определит Next.js и настроит сборку

### Другие платформы

Проект можно развернуть на любой платформе, поддерживающей Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Лицензия

MIT

## Контакты

Создано с любовью для Abylay & Laura
