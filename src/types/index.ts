// Типы для приложения

export interface WeddingInfo {
  brideName: string;
  groomName: string;
  weddingDate: Date;
  venue: {
    name: string;
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  time: string;
}

export interface RSVPData {
  name: string;
  email: string;
  phone?: string;
  attending: boolean;
  guestCount: number;
  dietaryRestrictions?: string;
  message?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
