export default function Portada() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[calc(100vh-160px)] md:h-screen flex flex-col items-center justify-center text-white">
        <img
          src="/IMG_3539.JPG"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative bg-opacity-50 rounded-lg w-full h-full justify-center items-center flex flex-col p-4 gap-4">
          <h1 className="p-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">
            Nuestra Boda
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">ARELY</p>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">&</p>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">PATRICK</p>
        </div>
      </section>
    </div>
  );
}
