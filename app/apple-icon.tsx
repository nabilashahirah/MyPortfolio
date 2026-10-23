import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* iPhone home-screen icon: same "N." mark as app/icon.svg, full-bleed (iOS rounds the corners). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 20%, #4a0f30 0%, #12050e 60%, #050306 100%)",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FF8FC7" />
              <stop offset="0.5" stopColor="#FF2E88" />
              <stop offset="1" stopColor="#B44CFF" />
            </linearGradient>
          </defs>
          <path d="M18 46V18l24 28V18" fill="none" stroke="url(#ink)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="51" cy="46" r="4.5" fill="#FF2E88" />
        </svg>
      </div>
    ),
    size
  );
}
