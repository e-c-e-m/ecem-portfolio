import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

type MousePosition = {
  x: number | null;
  y: number | null;
};

const useMousePosition = (throttleMs = 16): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, throttleMs);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      handleMouseMove.cancel(); // clean up throttled function
    };
  }, [throttleMs]);

  return mousePosition;
};

export default useMousePosition;
