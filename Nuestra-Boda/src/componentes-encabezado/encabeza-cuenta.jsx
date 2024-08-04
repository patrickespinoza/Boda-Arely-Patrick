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
    <div className="p-4 text-2xl sm:text-2xl md:text-4xl lg:text-8xl bg-black bg-opacity-50">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );

}

export default Countdown