import React, { useRef, useEffect, useState } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  // Lista de imágenes para el carrusel
  const images = [
    '/caja-de-regalo.png', 
    '/pareja-de-boda.png', 
    '/nosotros.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambia de imagen cada 6 segundos

    return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar
  }, []);

  return (
    <div className="relative w-40 h-full overflow-hidden flex justify-center items-center">
      <div
        ref={carouselRef}
        className="absolute flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full flex flex-col items-center justify-center">
            <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src={src} alt={`Imagen ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
