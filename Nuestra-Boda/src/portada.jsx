import React, { useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); 

  // Función para reproducir la música
  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  // Función para alternar el mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; 
      setIsMuted(!isMuted); 
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <section className="relative w-full h-[calc(110vh-160px)] md:h-screen flex flex-col items-center justify-center text-white">
        <img
          src="/puertafoto.jpeg"
          alt="Fondo"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative bg-opacity-50 rounded-lg w-full h-full justify-center items-center flex flex-col p-4 gap-4">
          <h1 className="roboto-black p-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif">
            Nuestra Boda
          </h1>
          <p className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-4xl" >11 | 01 | 2025</p>
          <p className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl">Arely & Patrick</p>

          {/* Enlace que reproduce la música */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Evitar el comportamiento por defecto del enlace
              handlePlayMusic(); // Reproducir la música
            }}
            className="bg-yellow-600 text-white p-3 rounded-md"
          >
            Reproducir Música
          </a>

          {/* Botón para alternar el mute */}
          <button
            onClick={toggleMute}
            className="absolute right-4 bottom-4 transform -translate-y-1/2 bg-yellow-600 p-2 rounded-full flex items-center justify-center"
            aria-label="Alternar Mute"
          >
            {isMuted ? (
              <FaVolumeMute className="text-white" size={24} />
            ) : (
              <FaVolumeUp className="text-white" size={24} />
            )}
          </button>
        </div>
      </section>
    </div>
  );
}


