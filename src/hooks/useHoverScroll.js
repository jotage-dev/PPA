import { useEffect, useRef } from "react";

/**
 * * @param {object} options
 * @param {number} options.scrollSpeed
 * @param {number} options.activationZone
 * @returns {React.RefObject}
 */
export function useHoverScroll(options = {}) {
  const { scrollSpeed = 7, activationZone = 0.1 } = options;

  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const zoneWidth = rect.width * activationZone;

      const startScrolling = (direction) => {
        cancelAnimationFrame(animationFrameRef.current);

        const scroll = () => {
          let speedFactor = 0;
          if (direction === "right") {
            speedFactor = (mouseX - (rect.width - zoneWidth)) / zoneWidth;
            container.scrollLeft += scrollSpeed * speedFactor;
          } else {
            speedFactor = (zoneWidth - mouseX) / zoneWidth;
            container.scrollLeft -= scrollSpeed * speedFactor;
          }
          animationFrameRef.current = requestAnimationFrame(scroll);
        };
        scroll();
      };

      if (mouseX > rect.width - zoneWidth) {
        startScrolling("right");
      } else if (mouseX < zoneWidth) {
        startScrolling("left");
      } else {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrameRef.current);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [scrollSpeed, activationZone]);
  return containerRef;
}
