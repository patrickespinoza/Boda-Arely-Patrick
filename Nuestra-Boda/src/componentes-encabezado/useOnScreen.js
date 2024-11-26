import { useState, useEffect } from "react";

const useOnScreen = (threshold = 0.5) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold, // Porcentaje de visibilidad del elemento para activar el callback
      }
    );

    const element = document.querySelector(".observe-element"); // Clase CSS para el elemento que deseas observar
    if (element) {
      observer.observe(element);
    }

    // Cleanup en el desmontaje
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return isIntersecting;
};

export default useOnScreen;
