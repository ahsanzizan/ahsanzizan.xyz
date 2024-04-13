import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

interface CustomCursorProps {
  isHovering: boolean;
}

export default function CustomCursor({
  isHovering,
}: Readonly<CustomCursorProps>) {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [x, setX] = useState(mouseX as number);
  const [y, setY] = useState(mouseY as number);

  const dampingFactor = 0.15; // Adjust this value to control the damping effect
  const updateInterval = 16; // Update interval in milliseconds (60 FPS)

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const updateCursorPosition = () => {
      setX((prevX) => prevX + ((mouseX as number) - prevX) * dampingFactor);
      setY((prevY) => prevY + ((mouseY as number) - prevY) * dampingFactor);
      timerId = setTimeout(updateCursorPosition, updateInterval);
    };

    updateCursorPosition();

    return () => {
      clearTimeout(timerId);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden border border-white drop-shadow-glow md:inline-block ${
        isHovering ? "h-7 w-7 bg-black" : "h-3 w-3 bg-white"
      } -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color] duration-500`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        willChange: "width, height, border",
      }}
    ></div>
  );
}
