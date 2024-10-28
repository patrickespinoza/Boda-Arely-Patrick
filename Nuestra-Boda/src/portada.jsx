import React, { useEffect } from 'react';

export default function Portada() {

  const handlePlayMusic = () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch((error) => {
      console.error("Error al reproducir el audio:", error);
    });
  };

  return (
    <div>
      <audio id="background-audio" loop>
        <source src="/allofme.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <section className="relative w-full h-[calc(110vh-160px)] md:h-screen flex flex-col items-center justify-center text-white">
        <img
          src="/IMG_3539.JPG"
          alt="Fondo"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative bg-opacity-50 rounded-lg w-full h-full justify-center items-center flex flex-col p-4 gap-4">
          <h1 className="roboto-black p-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif">
            Nuestra Boda
          </h1>
          <p className="font-cursiveDancing text-lg sm:text-2xl md:text-3xl lg:text-4xl" >ARELY</p>
          <p className="font-cursiveDancing text-lg sm:text-2xl md:text-3xl lg:text-4xl">&</p>
          <p className="font-cursiveDancing text-lg sm:text-2xl md:text-3xl lg:text-4xl">PATRICK</p>
          <button 
            onClick={handlePlayMusic} 
            className="mt-4 bg-yellow-600 rounded-md p-3 w-32 h-8 text-white flex"
          >
            Música
          </button>
        </div>
      </section>
    </div>
    
  );
}

// style={{ backgroundImage: 'url("/IMG_3539.JPG")', backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}
