'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';

// Пример данных - замените на реальные изображения
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/photo1.jpg',
    alt: 'Photo 1',
    width: 800,
    height: 600,
  },
  // Добавьте больше изображений
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Наша история
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Модальное окно для просмотра изображения */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
