import { WeddingInfo } from '@/types';

export const WEDDING_INFO: WeddingInfo = {
  brideName: 'Laura',
  groomName: 'Abylay',
  weddingDate: new Date('2026-08-15T16:00:00'),
  venue: {
    name: 'Название места проведения',
    address: 'Адрес места проведения',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  },
  time: '16:00',
};

export const WEDDING_HASHTAG = '#AbyLayLaura2026';
