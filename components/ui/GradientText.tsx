import type { ReactNode, CSSProperties } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  style?: CSSProperties;
}

export default function GradientText({
  children,
  className = "",
  from = "#F2B8D4",
  via = "#7ECDE8",
  to = "#FF6EB4",
  style,
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${via} 50%, ${to} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        ...style,
      }}
    >
      {children}
    </span>
  );
}



