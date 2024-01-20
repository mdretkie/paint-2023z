'use client';

import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const images = ['image1.webp', 'image2.webp'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }, 7000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 70);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="carousel h-[512px] relative">
      <img
        className="object-cover w-full h-full"
        src={images[currentImageIndex]}
        alt="Carousel Image"
      />
      <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-zinc-400 opacity-50"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
