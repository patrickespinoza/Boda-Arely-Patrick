import { useEffect, useState } from "react";

const Countdown= ({targetDate}) => {
    const calculateTime = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
            dias :Math.floor(difference / (1000 * 60 * 60 * 24)),
            horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutos:Math.floor((difference / 1000 / 60 ) % 60),
            segundos: Math.floor((difference / 1000) % 60),
        }
      }  
      return timeLeft
    };
    const [timeLeft, setTimeLeft] = useState(calculateTime());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTime());
        },1000)

        return () => clearTimeout(timer)
    });;

    const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}
        {index < array.length -1 ? " | " : ""}
      </span>
    );
  });
  return (
    <section>
    <div className="p-2 sm:text-lg md:text-4xl lg:text-5xl text-black flex flex-col items-center rounded-lg border-8 border-yellow-700">
            <div className="flex space-x-10">
                {Object.keys(timeLeft).map((interval) => (
                    <div key={interval} className="flex flex-col items-center gap-2">
                        <span className="">{timeLeft[interval]}</span>
                        <span className=" capitalize">{interval}</span>
                    </div>
                ))}
            </div>
            {Object.keys(timeLeft).length === 0 && <span>Time's up!</span>}
        </div>
    </section>
  );

}

export default Countdown