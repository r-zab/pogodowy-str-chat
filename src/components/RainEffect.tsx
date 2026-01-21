import { useMemo } from "react";

const RainEffect = () => {
  const raindrops = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${1 + Math.random() * 1.5}s`,
      height: `${15 + Math.random() * 25}px`,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-sky-300/60 to-sky-400/80 rounded-full animate-rain"
          style={{
            left: drop.left,
            height: drop.height,
            opacity: drop.opacity,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;
