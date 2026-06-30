import { useEffect, useState } from "react";

export default function CustomCursor({ darkMode }) {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Добавляем новую точку пузырька в координаты мыши
      const newPoint = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 6, // Случайный размер пузырька
      };

      setTrail((prev) => [...prev.slice(-20), newPoint]); // Храним только последние 20 точек
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // На мобильных устройствах шлейф не нужен
  if (typeof window !== "undefined" && matchMedia("(pointer: coarse)").matches) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trail.map((point, index) => {
        // Рассчитываем прозрачность: старые точки более прозрачные
        const opacity = index / trail.length;
        // Цвета: неоновый циан для темной темы, сочный синий для светлой
        const bgColor = darkMode ? "bg-cyan-400" : "bg-blue-600";
        const shadowColor = darkMode ? "shadow-[0_0_10px_#22d3ee]" : "shadow-[0_0_10px_#2563eb]";

        return (
          <div
            key={point.id}
            className={`absolute rounded-full transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 ${bgColor} ${shadowColor}`}
            style={{
              left: point.x,
              top: point.y,
              width: `${point.size}px`,
              height: `${point.size}px`,
              opacity: opacity,
              scale: opacity, // Пузырьки плавно уменьшаются при исчезновении
            }}
          />
        );
      })}
    </div>
  );
}
