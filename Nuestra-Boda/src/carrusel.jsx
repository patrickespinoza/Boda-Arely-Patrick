import React, { useRef, useEffect, useState } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  // Lista de imágenes para el carrusel
  const images = [
    '/IMG_3538.JPG', 
    '/IMG_3539.JPG', 
    '/nosotros.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambia de imagen cada 10 segundos

    return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar
  }, []);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[400px] h-[400px] overflow-hidden flex justify-center items-center">
      <div
        ref={carouselRef}
        className="absolute flex transition-transform duration-2000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <img className="h-[400px] w-[400px] object-cover" src={src} alt={`Imagen ${i + 1}`} />
          </div>
        ))}
      </div>
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        onClick={prevImage}
      >
        &lt; {/* Botón de izquierda */}
      </button>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        onClick={nextImage}
      >
        &gt; {/* Botón de derecha */}
      </button>
    </div>
  );
};

export default Carousel;

