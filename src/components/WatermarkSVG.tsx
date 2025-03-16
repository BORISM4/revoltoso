// WatermarkSVG.tsx
import React from "react";

interface WatermarkSVGProps {
  text: string;
  rotation?: number;
  opacity?: number;
}

const WatermarkSVG: React.FC<WatermarkSVGProps> = ({
  text,
  rotation = -20,
  opacity = 0.1,
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${rotation} 50 50)`}
        style={{
          fontSize: "1.5em",
          fill: `rgba(0, 0, 0, ${opacity})`,
          fontWeight: "bold",
        }}
      >
        {text}
      </text>
    </svg>
  );
};

export default WatermarkSVG;
