import React, { useMemo } from 'react';

interface BubbleConfig {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function AmbientBubbles() {
  const bubbles = useMemo<BubbleConfig[]>(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: 4 + (i * 7) + (Math.sin(i) * 3), // distributed across the screen
      size: 10 + ((i * 5) % 18),             // 10px to 28px
      duration: 14 + ((i * 3) % 12),         // 14s to 26s
      delay: (i * 1.3) % 9,                  // staggered start
      opacity: 0.25 + ((i % 4) * 0.1),       // soft translucency
    }));
  }, []);

  return (
    <div className="ambient-bubbles-layer" aria-hidden="true">
      {bubbles.map(b => (
        <span
          key={b.id}
          className="bubble"
          style={
            {
              '--bubble-x': `${b.left}%`,
              '--bubble-size': `${b.size}px`,
              '--bubble-duration': `${b.duration}s`,
              '--bubble-delay': `${b.delay}s`,
              '--bubble-max-op': b.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
