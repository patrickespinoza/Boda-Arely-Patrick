import React, { useState } from "react";
import Carousel from "./carrusel";
import Countdown from "./componentes-encabezado/encabeza-cuenta";


export default function Intinerario() {
  // Estados para manejar el formulario
  const [isOpen, setIsOpen] = useState(false);
  const [numPeople, setNumPeople] = useState(1);
  const [name, setName] = useState("");

  const handleConfirm = async () => {
    const data = { name, numPeople };

    try {
      const response = await fetch("http://localhost:5000/confirmar-asistencia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Confirmación guardada");
        setIsOpen(false); // Cierra el formulario
        setName("");
        setNumPeople(1);
      } else {
        alert("Error al guardar la confirmación");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="p-7">
       <div className="flex flex-col items-center justify-center p-7">
        <Countdown targetDate="2025-01-11T00:00:00" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Sección de Celebración */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold p-5">CELEBRACION</h1>
          <p className="text-lg sm:text-xl p-3">11 ENERO 5:00 PM</p>
          <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/tarta-de-boda.png" alt="imagen del salon" />
          <p className="p-3 text-center">Salon Maria Bonita Event Center</p>
          <p className="p-3 text-center">C.2 Pte. 905, Libertad, 72130 Heroica Puebla de Zaragoza, Pue</p>
          <a className="bg-blue-700 rounded-md p-3 w-32 h-8 flex items-center justify-center text-white" href="https://www.google.com/maps/place/Eventos+Mar%C3%ADa+Bonita+Puebla/@19.0703659,-98.24125,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc79834a1cd75:0xb0d61abeb78ef0fe!8m2!3d19.0703608!4d-98.2386751!16s%2Fg%2F11mtddfrw5?entry=ttu">Ver Dirección</a>
        </div>

        {/* Sección de Vestimenta */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold p-5">VESTIMENTA</h1>
          <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/pareja-de-boda.png" alt="dress code" />
          <p className="text-lg sm:text-xl p-7 text-center">Formal</p>
        </div>

        {/* Sección de Momentos */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold p-5">NUESTROS MOMENTOS</h1>
          <Carousel />
        </div>

        {/* Sección de Regalos */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold p-5">REGALOS</h1>
          <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/caja-de-regalo.png" alt="dress code" />
          <p className="text-lg sm:text-xl p-7 text-center">Si deseas darnos un regalo, te dejamos unos tips</p>
          <button className="bg-blue-700 rounded-md p-3 w-32 h-8 flex items-center justify-center text-white">Tips</button>
        </div>

        {/* Sección de Confirmación de Asistencia */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold p-5">CONFIRMAR ASISTENCIA</h1>
          <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/anillos-de-boda.png" alt="dress code" />
          <p className="text-lg sm:text-xl p-7 text-center">Confirma tu asistencia antes de 11 de diciembre</p>
          <button className="bg-blue-700 rounded-md p-3 w-32 h-11 flex items-center justify-center text-white" onClick={() => setIsOpen(true)}>Confirmar Asistencia</button>
        </div>
      </div>

      {/* Formulario de Confirmación */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-bold">Nombre</h2>
            <input
              type="text"
              value={name}
              placeholder="Escribe solo el nombre de un integrate"
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <h2 className="text-lg font-bold">¿Cuántas personas asistirán?</h2>
            <input
              type="number"
              value={numPeople}
              min="1"
              onChange={(e) => setNumPeople(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button className="bg-blue-500 rounded-md p-2 mt-3 w-full text-white" onClick={handleConfirm}>Enviar Confirmación</button>
            <button className="bg-red-600 rounded-md p-2 mt-3 w-full text-white" onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
