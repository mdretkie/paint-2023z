'use client';

import { Carousel } from 'flowbite-react';

export function CarouselComponent() {
  return (
    <div className="h-[512px]">
      <Carousel>
        <img src="image1.webp" alt="..." />
        <img src="image2.webp" alt="..." />
      </Carousel>
    </div>
  );
}
