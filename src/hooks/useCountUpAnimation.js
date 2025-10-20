import { useEffect, useRef } from "react";

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    const currentValue = Math.floor(progress * (end - start) + start);
    obj.innerHTML = currentValue.toLocaleString("pt-BR");

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

export function useCountUpAnimation(endValue, duration = 2000) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const numericEndValue = parseInt(
      String(endValue).replace(/[^0-9]/g, ""),
      10
    );
    if (isNaN(numericEndValue)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue(element, 0, numericEndValue, duration);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [endValue, duration]);

  return ref;
}
