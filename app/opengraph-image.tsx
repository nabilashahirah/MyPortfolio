import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nabila Shahirah — AI Engineer & Systems Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050306",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div style={{
          position: "absolute", top: -100, left: -80,
          width: 600, height: 500, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,46,136,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
          display: "flex",
        }} />
        <div style={{
          position: "absolute", bottom: -80, right: -60,
          width: 500, height: 420, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(180,76,255,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          display: "flex",
        }} />

        {/* NS badge */}
        <div style={{
          width: 88, height: 88, borderRadius: 20,
          background: "linear-gradient(135deg, #FF2E88, #FF8FC7)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, fontWeight: 800, color: "white",
          marginBottom: 28,
          boxShadow: "0 8px 32px rgba(232,114,154,0.30)",
        }}>
          NS
        </div>

        {/* Name */}
        <div style={{
          fontSize: 68, fontWeight: 800, color: "white",
          letterSpacing: -3, lineHeight: 1,
          marginBottom: 16,
        }}>
          Nabila Shahirah
        </div>

        {/* Role */}
        <div style={{
          fontSize: 26, fontWeight: 500,
          color: "rgba(255,255,255,0.50)",
          marginBottom: 40, letterSpacing: 0.5,
        }}>
          AI Engineer · AR Developer · Full-Stack Dev
        </div>

        {/* Divider */}
        <div style={{
          width: 120, height: 2, borderRadius: 999,
          background: "linear-gradient(90deg, #FF2E88, #FF8FC7, #B44CFF)",
          marginBottom: 28,
          display: "flex",
        }} />

        {/* Stats row */}
        <div style={{
          display: "flex", gap: 40, alignItems: "center",
        }}>
          {[
            { value: "6", label: "Awards" },
            { value: "5+", label: "Projects" },
            { value: "CGPA 3.67", label: "Dean's List" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: "white" }}>{s.value}</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", letterSpacing: 1 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
