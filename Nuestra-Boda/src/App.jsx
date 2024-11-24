// App.jsx
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Iconos de volumen
import Portada from './portada'; // Componente Portada
import Intinerario from './intinerario'; // Componente Itinerario
import Inicio from './inicio'; // Componente Inicio

const App = () => {
  const audioRef = useRef(null); // Referencia al audio
  const [isMuted, setIsMuted] = useState(false); // Estado para controlar el mute

  // Función para reproducir la música
  const handlePlayMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  // Función para alternar entre mute/desmute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Router>
      {/* Reproductor de música global */}
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <Routes>
        {/* Pasa la función handlePlayMusic como prop al componente Inicio */}
        <Route path="/" element={<Inicio handlePlayMusic={handlePlayMusic} />} />
        <Route path="/todo" element={<><Portada /><Intinerario /></>} />
      </Routes>

      {/* Control de volumen */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 bg-yellow-600 p-2 rounded-full flex items-center justify-center"
        aria-label="Mutear/Desmutear Música"
      >
        {isMuted ? <FaVolumeMute className="text-white" size={24} /> : <FaVolumeUp className="text-white" size={24} />}
      </button>
    </Router>
  );
};

export default App;
