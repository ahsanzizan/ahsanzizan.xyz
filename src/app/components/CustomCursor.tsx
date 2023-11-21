import useMousePosition from "../hooks/useMousePosition";

interface CustomCursorProps {
  isHovering: boolean;
}

export default function CustomCursor({ isHovering }: CustomCursorProps) {
  const { x, y } = useMousePosition();

  return (
    <div
      className={`drop-shadow-glow pointer-events-none fixed left-0 top-0 z-[9999] ${
        isHovering ? "h-7 w-7 bg-black" : "h-3 w-3 bg-white"
      } -translate-x-1/2 -translate-y-1/2 rounded-full duration-500 ease-out`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        willChange: "width, height, transform, border",
      }}
    ></div>
  );
}
