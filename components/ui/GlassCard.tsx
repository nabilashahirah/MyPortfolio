import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: string;
  style?: CSSProperties;
}

export default function GlassCard({
  children,
  className = "",
  glow = false,
  glowColor = "rgba(100,180,220,0.12)",
  style,
}: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(28,18,16,0.08)",
        ...(glow && {
          boxShadow: `0 0 60px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.75)`,
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
}



