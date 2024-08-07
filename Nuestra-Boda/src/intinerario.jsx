import Carousel from "./carrusel"

export default function Intinerario () {
    return (
        <div class="p-7">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div class="flex flex-col items-center justify-center gap-3">
                <h1 class="text-2xl sm:text-3xl font-bold p-5">CELEBRACION</h1>
                <p class="text-lg sm:text-xl p-3">11 ENERO 5:00 PM</p>
                <img class="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/tarta-de-boda.png" alt="imagen del salon" />
                <p class="p-3 text-center">Salon Maria Bonita Event Center</p>
                <p class="p-3 text-center">C.2 Pte. 905, Libertad, 72130 Heroica Puebla de Zaragoza, Pue</p>
                <a class="bg-gray-400 rounded-md p-3 w-32 h-8 flex items-center justify-center text-white" href="https://www.google.com/maps/place/Eventos+Mar%C3%ADa+Bonita+Puebla/@19.0703659,-98.24125,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc79834a1cd75:0xb0d61abeb78ef0fe!8m2!3d19.0703608!4d-98.2386751!16s%2Fg%2F11mtddfrw5?entry=ttu">Ver Dirección</a>
            </div>
            <div class="flex flex-col items-center justify-center gap-3">
                <h1 class="text-xl sm:text-2xl font-bold p-5">VESTIMENTA</h1>
                <img class="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/pareja-de-boda.png" alt="dress code" />
                <p class="text-lg sm:text-xl p-7 text-center">Formal</p>
            </div>
            <div class="flex flex-col items-center justify-center gap-3">
            <h1 class="text-xl sm:text-2xl font-bold p-5">NOSOTROS</h1>
                <Carousel/>
            </div>
            <div class="flex flex-col items-center justify-center gap-3">
                <h1 class="text-xl sm:text-2xl font-bold p-5">REGALOS</h1>
                <img class="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/caja-de-regalo.png" alt="dress code" />
                <p class="text-lg sm:text-xl p-7 text-center">Formal</p>
            </div>
            <div class="flex flex-col items-center justify-center gap-3">
                <h1 class="text-xl sm:text-2xl font-bold p-5">CONFIRMAR ASISTENCIA</h1>
                <img class="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/anillos-de-boda.png" alt="dress code" />
                <p class="text-lg sm:text-xl p-7 text-center">Formal</p>
            </div>
        </div>
    </div>
    
    )
}