import Countdown from "../componentes-encabezado/encabeza-cuenta";

export default function Portada () {


    return (
        <div className="w-full">
          <section className="relative w-full h-screen flex flex-col items-center justify-center text-white">
            <img
              src="../imagenes/IMG_3539.JPG"
              alt="Fondo"
              className="absolute inset-0 w-full h-full object-cover"
            />
    
            <div className="relative bg-opacity-50 rounded-lg w-full h-full justify-center items-center flex flex-col p-4">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                11/Enero/2025
              </p>
              <h1 className="p-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">
                Nuestra Boda
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">Arely</p>
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">&</p>
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">Patrick</p>
              <div className="mt-4">
                <Countdown targetDate="2025-01-11T00:00:00" />
              </div>
            </div>
          </section>
        </div>
      );
    }